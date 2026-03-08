package com.domus.api.service.image;

import com.domus.api.model.image.Image;
import com.domus.api.model.property.Property;
import com.domus.api.repository.image.ImageRepository;
import com.domus.api.repository.property.PropertyRepository;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class ImageService {
    @PersistenceContext
    private EntityManager entityManager;

    private final ImageRepository repository;
    private final PropertyRepository propertyRepository;

    public ImageService(ImageRepository repository, PropertyRepository propertyRepository){
        this.repository = repository;
        this.propertyRepository = propertyRepository;
    }

    public <S extends Image> S save(S entity){
        if(entity.getId() == null){
            if(entity.getProperty() != null){
                Property property = propertyRepository
                         .findById(entity.getProperty().getId())
                        .orElseThrow(() -> new RuntimeException("Property not found"));

                entity.setProperty(property);
            }

            entityManager.persist(entity);
        }
        else{
            entity = entityManager.merge(entity);
        }

        return entity;
    }

    public Optional<Image> findById(Long id){
        return repository.findById(id);
    }

    public List<Image> findAll(){
        return repository.findAll();
    }

    public void deleteById(Long id){
        repository.deleteById(id);
    }
}
