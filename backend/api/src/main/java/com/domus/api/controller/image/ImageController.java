package com.domus.api.controller.image;

import com.domus.api.model.image.Image;
import com.domus.api.service.image.ImageService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/image")
public class ImageController {
    private final ImageService service;

    public ImageController(ImageService service){this.service = service;}

    @PostMapping()
    public ResponseEntity<Image> addImage(@RequestBody Image image){
        service.save(image);
        return ResponseEntity.ok().body(image);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Optional<Image>> findById(@PathVariable Long id){
        Optional<Image> image = service.findById(id);
        return ResponseEntity.ok().body(image);
    }

    @GetMapping()
    public List<Image> findAll() {
        return service.findAll();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Optional<Image>> deleteById(@PathVariable Long id){
        Optional<Image> image = service.findById(id);
        service.deleteById(id);
        return ResponseEntity.ok().body(image);
    }
}
