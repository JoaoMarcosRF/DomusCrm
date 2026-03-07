package com.domus.api.controller.property;

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

    @GetMapping()
    public String getHome(){
        return "ONLINE";
    }

    @PostMapping()
    public ResponseEntity<?> addProperty(@RequestBody Property property) {
        service.save(property);
        return ResponseEntity.ok().body(property);
    }

    @GetMapping("/all")
    public List<Property> findAll() {
        return service.findAll();
    }

    @GetMapping("/{id}")
    public Optional<Property> findById(@PathVariable Long id) {
        return service.findById(id);
    }
}
