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
public interface ProductRepository extends
        JpaRepository<Product, Long>,
        JpaSpecificationExecutor<Product> {

    // Basic finder methods
    Optional<Product> findBySku(String sku);
    List<Product> findByNameContainingIgnoreCase(String name);
    List<Product> findByCategory_Id(Integer categoryId);

    // Price range queries
    List<Product> findByPriceBetween(BigDecimal minPrice, BigDecimal maxPrice);

    // Stock-related queries
    @Query("SELECT p FROM Product p WHERE p.stockQuantity < :threshold")
    List<Product> findLowStockProducts(@Param("threshold") Integer threshold);

    @Query("SELECT p FROM Product p WHERE p.stockQuantity = 0")
    List<Product> findOutOfStockProducts();

    // Complex filtering queries
    @Query("SELECT p FROM Product p WHERE " +
            "(:name IS NULL OR LOWER(p.name) LIKE LOWER(CONCAT('%', :name, '%'))) AND " +
            "(:categoryId IS NULL OR p.category.id = :categoryId) AND " +
            "(:minPrice IS NULL OR p.price >= :minPrice) AND " +
            "(:maxPrice IS NULL OR p.price <= :maxPrice)")
    List<Product> searchProducts(
            @Param("name") String name,
            @Param("categoryId") Integer categoryId,
            @Param("minPrice") BigDecimal minPrice,
            @Param("maxPrice") BigDecimal maxPrice
    );

    // Aggregation queries
    @Query("SELECT AVG(p.price) FROM Product p WHERE p.category.id = :categoryId")
    BigDecimal calculateAveragePriceByCategory(@Param("categoryId") Integer categoryId);

    @Query("SELECT p.category.name, COUNT(p) FROM Product p GROUP BY p.category.name")
    List<Object[]> countProductsByCategory();

    // Performance optimization for large datasets
    @Query("SELECT p FROM Product p " +
            "WHERE p.price = (SELECT MAX(p2.price) FROM Product p2)")
    List<Product> findMostExpensiveProducts();

}
