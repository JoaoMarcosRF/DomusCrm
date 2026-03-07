package com.domus.api.service.property;

import com.domus.api.model.property.Property;
import com.domus.api.repository.property.PropertyRepository;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.List;
import java.util.Optional;

@Service
public class PropertyService {
    @PersistenceContext
    private EntityManager entityManager;


    private final PropertyRepository  repository;

    public PropertyService(PropertyRepository repository) {
        this.repository = repository;
    }

    public <S  extends Property> S save(S entity) {
        if (entity.getId() == null) {
           entityManager.persist(entity);
        }
        else {
            entityManager.merge(entity);
        }
        return entity;
    }

    public List<Property> findAll() {
        return repository.findAll();
    }

    public Optional<Property> findById(Long id) {
        return repository.findById(id);
    }

//ja vem por padrao no JPA:
//    findAll()
//
//    findById()
//
//    save()
//
//    delete()
//
}
