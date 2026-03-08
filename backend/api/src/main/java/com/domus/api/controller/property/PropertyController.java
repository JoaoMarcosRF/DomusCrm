package com.domus.api.controller.property;

import com.domus.api.model.image.Image;
import com.domus.api.model.property.Property;
import com.domus.api.service.property.PropertyService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/property")
public class PropertyController {
    private final PropertyService service;

    public PropertyController(PropertyService service) {
        this.service = service;
    }

    @PostMapping()
    public ResponseEntity<?> addProperty(@RequestBody Property property) {
        service.save(property);
        return ResponseEntity.ok().body(property);
    }

    @GetMapping()
    public List<?> findAll() {
        return service.findAll();
    }

    @GetMapping("/{id}")
    public Optional<?> findById(@PathVariable Long id) {
        return service.findById(id);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Optional<Property>> deleteById(@PathVariable Long id){
        Optional<Property> property = service.findById(id);
        service.deleteById(id);
        return ResponseEntity.ok().body(property);
    }
}
