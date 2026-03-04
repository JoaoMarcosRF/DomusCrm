package com.domus.api.service;

import com.domus.api.model.property.Property;
import com.domus.api.repository.PropertyRepository;

import java.math.BigDecimal;
import java.util.List;

public class PropertyService {
    private final PropertyRepository  repository;

    public PropertyService(PropertyRepository repository) {
        this.repository = repository;
    }

    public void createProperty(Property property) {
        if(property.getValue().compareTo(BigDecimal.ZERO)<=0){
            throw new IllegalArgumentException("Value cannot be less than zero");
        }

        repository.save(property);
    }

    public List<Property> findAll() {

    }
}
