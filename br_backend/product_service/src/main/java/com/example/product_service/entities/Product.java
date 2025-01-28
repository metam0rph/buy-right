package com.example.product_service.entities;

import jakarta.persistence.*;
import lombok.Data;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.HashSet;
import java.util.Set;
@Data
@Entity
@Table(name = "products", schema = "product_service",
        uniqueConstraints = {
                @UniqueConstraint(columnNames = {"sku", "name"})
        },
        indexes = {
                @Index(name = "idx_product_name", columnList = "name"),
                @Index(name = "idx_product_price", columnList = "price")
        }
)
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    // Unique Stock Keeping Unit
    @Column(name = "sku", unique = true, nullable = false, length = 50)
    private String sku;

    // Product Name
    @Column(name = "name", nullable = false, length = 255)
    private String name;

    // Detailed Description
    @Column(name = "description", length = 1000)
    private String description;

    // Pricing Information
    @Column(name = "price", nullable = false, precision = 10, scale = 2)
    private BigDecimal price;

    // Inventory Management
    @Column(name = "stock_quantity", nullable = false)
    private Integer stockQuantity;

    // Product Status
    @Enumerated(EnumType.STRING)
    @Column(name = "status")
    private ProductStatus status;

    // Category Relationship
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "category_id", nullable = false)
    private Category category;

    // Product Images
    @OneToMany(mappedBy = "product", cascade = CascadeType.ALL, orphanRemoval = true)
    private Set<ProductImage> images = new HashSet<>();

    // Audit Fields
    @Column(name = "created_at", updatable = false)
    private LocalDateTime createdAt;

    @Column(name = "updated_at")
    private LocalDateTime updatedAt;

    // Pricing and Inventory Metadata
    @Column(name = "cost_price", precision = 10, scale = 2)
    private BigDecimal costPrice;

    @Column(name = "min_stock_threshold")
    private Integer minStockThreshold;

    // Enum for Product Status
    public enum ProductStatus {
        ACTIVE,       // Product is available for sale
        INACTIVE,     // Product is not currently for sale
        OUT_OF_STOCK, // No inventory available
        DISCONTINUED  // Product is no longer produced
    }

    // Lifecycle Callbacks
    @PrePersist
    public void onCreate() {
        this.createdAt = LocalDateTime.now();
        this.updatedAt = LocalDateTime.now();

        // Set default values
        if (this.status == null) {
            this.status = ProductStatus.ACTIVE;
        }
        if (this.minStockThreshold == null) {
            this.minStockThreshold = 10; // Default low stock threshold
        }
    }

    @PreUpdate
    public void onUpdate() {
        this.updatedAt = LocalDateTime.now();

        // Automatic status management
        if (this.stockQuantity == null || this.stockQuantity <= 0) {
            this.status = ProductStatus.OUT_OF_STOCK;
        } else if (this.stockQuantity <= this.minStockThreshold) {
            this.status = ProductStatus.INACTIVE;
        } else {
            this.status = ProductStatus.ACTIVE;
        }
    }

    // Business Logic Methods
    public boolean isInStock() {
        return this.stockQuantity != null && this.stockQuantity > 0;
    }

    public boolean isLowStock() {
        return this.stockQuantity != null &&
               this.minStockThreshold != null &&
               this.stockQuantity <= this.minStockThreshold;
    }

    public BigDecimal calculateProfit() {
        if (costPrice == null) {
            return BigDecimal.ZERO;
        }
        return price.subtract(costPrice);
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getSku() {
        return sku;
    }

    public void setSku(String sku) {
        this.sku = sku;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public BigDecimal getPrice() {
        return price;
    }

    public void setPrice(BigDecimal price) {
        this.price = price;
    }

    public Integer getStockQuantity() {
        return stockQuantity;
    }

    public void setStockQuantity(Integer stockQuantity) {
        this.stockQuantity = stockQuantity;
    }

    public ProductStatus getStatus() {
        return status;
    }

    public void setStatus(ProductStatus status) {
        this.status = status;
    }

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }

    public Set<ProductImage> getImages() {
        return images;
    }

    public void setImages(Set<ProductImage> images) {
        this.images = images;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }

    public LocalDateTime getUpdatedAt() {
        return updatedAt;
    }

    public void setUpdatedAt(LocalDateTime updatedAt) {
        this.updatedAt = updatedAt;
    }

    public BigDecimal getCostPrice() {
        return costPrice;
    }

    public void setCostPrice(BigDecimal costPrice) {
        this.costPrice = costPrice;
    }

    public Integer getMinStockThreshold() {
        return minStockThreshold;
    }

    public void setMinStockThreshold(Integer minStockThreshold) {
        this.minStockThreshold = minStockThreshold;
    }
}
