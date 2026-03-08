package com.domus.api.model.costumer;


import com.domus.api.model.lead.Lead;
import com.domus.api.model.shared.User;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.experimental.SuperBuilder;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@SuperBuilder
@NoArgsConstructor
@Entity
@Table(name="costumers")
public class Costumer extends User {
    private String cpf;
    private LocalDate registerData;

    @OneToMany(mappedBy = "costumer", cascade = CascadeType.ALL)
    private List<Lead> leads = new ArrayList<>();
}
