package com.example.product_service.repo;

import com.example.product_service.models.Product;
import org.springframework.data.repository.Repository;

import java.util.List;
import java.util.Optional;

public interface ProductRepo<T, ID> extends Repository<T, ID> {
    Optional<T> findById(ID id);
}