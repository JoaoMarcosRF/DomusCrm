package com.domus.api.controller;

import com.domus.api.model.property.Property;
import com.domus.api.service.PropertyService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/property")
public class PropertyController {
    private final PropertyService service;

    public PropertyController(PropertyService service) {
        this.service = service;
    }

    @PostMapping
    public ResponseEntity<?> createProperty(@RequestBody Property property) {
        service.createProperty(property);
        return ResponseEntity.ok("Successfully create!");
    }

    @GetMapping("/all")
    public List<Property> findAll() {
        return service.findAll();
    }
}
