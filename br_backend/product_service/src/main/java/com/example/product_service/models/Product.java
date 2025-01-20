package com.example.product_service.models;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Product {
    String id;
    String name;
    String imageUrl[];
    int originalPrice;
    int discountPercentage;
    String description;
    String category;
    float Rating;
}
