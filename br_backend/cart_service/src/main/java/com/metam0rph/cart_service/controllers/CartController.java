package com.metam0rph.cart_service.controllers;

import com.metam0rph.cart_service.models.Product;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping("/Cart")
public class CartController {
    @RequestMapping("/getItems")
    List<Product> getItems(){
        return Arrays.asList(new Product());
    }

}
