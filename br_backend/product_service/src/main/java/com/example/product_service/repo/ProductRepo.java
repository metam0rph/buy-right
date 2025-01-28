package com.example.product_service.repo;

import com.example.product_service.entities.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.math.BigDecimal;
import java.util.List;
import java.util.Optional;

@Repository
public interface ProductRepo extends JpaRepository<Product, Long>,
        JpaSpecificationExecutor<Product> {
    
    // Find by SKU
    Optional<Product> findBySku(String sku);
    
    // Find by category id
    List<Product> findByCategoryId(Integer categoryId);
    
    // Find by name containing (case-insensitive)
    List<Product> findByNameContainingIgnoreCase(String name);
    
    // Find products with stock less than specified amount
    List<Product> findByStockQuantityLessThan(Integer quantity);
    
    // Find products within a price range
    List<Product> findByPriceBetween(BigDecimal minPrice, BigDecimal maxPrice);
    
    // Find products by multiple category IDs
    List<Product> findByCategoryIdIn(List<Integer> categoryIds);
    
    // Custom query to find products with their images
    @Query("SELECT DISTINCT p FROM Product p LEFT JOIN FETCH p.images WHERE p.id = :productId")
    Optional<Product> findByIdWithImages(@Param("productId") Long productId);
    
    // Find products with stock available (stock > 0)
    List<Product> findByStockQuantityGreaterThan(Integer quantity);
    
    // Check if SKU exists
    boolean existsBySku(String sku);
    
    // Custom query to find products by category and minimum stock
    @Query("SELECT p FROM Product p WHERE p.category.id = :categoryId AND p.stockQuantity >= :minStock")
    List<Product> findByCategoryAndMinimumStock(
        @Param("categoryId") Integer categoryId, 
        @Param("minStock") Integer minStock
    );
}
