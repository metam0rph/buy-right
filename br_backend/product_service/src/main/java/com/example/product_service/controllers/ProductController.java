package com.example.product_service.controllers;

import com.example.product_service.models.Product;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping("/Product")
public class ProductController {
    @RequestMapping("/getItems")
    List<Product> getProducts(){
        return Arrays.asList(new Product());
    }

}