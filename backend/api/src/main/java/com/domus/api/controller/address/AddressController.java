package com.domus.api.controller.address;

import com.domus.api.model.address.Address;
import com.domus.api.service.address.AddressService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/address")
public class AddressController {
    private final AddressService service;

    public AddressController(AddressService service){
        this.service = service;
    }

    @PostMapping()
    public ResponseEntity<Address> addAddress(@RequestBody Address address){
        service.save(address);
        return ResponseEntity.ok().body(address);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Address> findById(@PathVariable long id){
        Address address =  service.findById(id);
        return ResponseEntity.ok().body(address);
    }

    @GetMapping("/all")
    public ResponseEntity<List<Address>> findAll(){
        return ResponseEntity.ok().body(service.findAll());
    }




}
