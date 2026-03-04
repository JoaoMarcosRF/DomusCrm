package com.domus.api.model.lead;

import com.domus.api.model.property.Property;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Setter

@Entity
@Table(name = "leads")
public class Lead {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private LocalDate interestDate;
    private String message;

    @Enumerated(EnumType.STRING)
    private LeadStatus leadStatus;

    @ManyToOne()
    @JoinColumn(name = "property_id")
    private Property property;
}
