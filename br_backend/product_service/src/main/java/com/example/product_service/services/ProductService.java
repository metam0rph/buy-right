package com.example.product_service.services;

import com.example.product_service.dto.ProductDTO;
import com.example.product_service.entities.Product;
import com.example.product_service.exception.ResourceNotFoundException;
import com.example.product_service.repo.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.List;
import java.util.stream.Collectors;

@Service
//@Transactional(readOnly = true)
public class ProductService {

    private final ProductRepository productRepository;
@Autowired
    ProductService(ProductRepository productRepository){
        this.productRepository = productRepository;
    }
    public Page<ProductDTO> getAllProducts(Pageable pageable) {
        return productRepository.findAll(pageable)
                .map(this::convertToDTO);
    }

    public ProductDTO getProductById(Long id) {
        return productRepository.findById(id)
                .map(this::convertToDTO)
                .orElseThrow(() -> new ResourceNotFoundException("Product not found with id: " + id));
    }

    public List<ProductDTO> searchProducts(String name, Integer categoryId,
                                           BigDecimal minPrice, BigDecimal maxPrice) {
        Specification<Product> spec = Specification.where(null);

        if (name != null && !name.trim().isEmpty()) {
            spec = spec.and((root, query, cb) ->
                    cb.like(cb.lower(root.get("name")), "%" + name.toLowerCase() + "%"));
        }

        if (categoryId != null) {
            spec = spec.and((root, query, cb) ->
                    cb.equal(root.get("category").get("id"), categoryId));
        }

        if (minPrice != null) {
            spec = spec.and((root, query, cb) ->
                    cb.greaterThanOrEqualTo(root.get("price"), minPrice));
        }

        if (maxPrice != null) {
            spec = spec.and((root, query, cb) ->
                    cb.lessThanOrEqualTo(root.get("price"), maxPrice));
        }

        return productRepository.findAll(spec)
                .stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }

    public List<ProductDTO> getProductsByCategory(Integer categoryId) {
        return productRepository.findByCategory_Id(categoryId)
                .stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }

    public List<ProductDTO> getLowStockProducts(Integer threshold) {
        return productRepository.findLowStockProducts(threshold)
                .stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }

    public Page<ProductDTO> findAllWithSpec(Specification<com.example.product_service.entities.Product> spec, java.awt.print.Pageable pageable) {
        return productRepository.findAll(spec, (Pageable) pageable)
                .map(this::convertToDTO);
    }
    private ProductDTO convertToDTO(com.example.product_service.entities.Product product) {
        ProductDTO dto = new ProductDTO();
        dto.setId(product.getId());
        dto.setSku(product.getSku());
        dto.setName(product.getName());
        dto.setDescription(product.getDescription());
        dto.setOriginalPrice(product.getPrice().intValue());
        dto.setStockQuantity(product.getStockQuantity());
        dto.setCategoryName(product.getCategory().getName());
        return dto;
    }
}
