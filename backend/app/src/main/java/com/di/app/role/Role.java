package com.di.app.role;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;


@Entity @Data
@NoArgsConstructor
@AllArgsConstructor
public class Role {

    @Id @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long roleid;
    private String name;
}
