package com.domus.api.service.address;

import com.domus.api.model.address.Address;
import com.domus.api.repository.address.AddressRepository;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AddressService {
    @PersistenceContext
    private EntityManager entityManager;

    private final AddressRepository repository;

    public AddressService(AddressRepository repository){
        this.repository = repository;
    }

    public <S extends Address> S save(S entity){
        if(entity.getId() == null) {
            entityManager.persist(entity);
        }
        else {
            entity = entityManager.merge(entity);
        }
        return entity;
    }
    public Address findById(Long id){
        return entityManager.find(Address.class, id);
    }

    public List<?> findAll(){
        return repository.findAll();
    }

}
