package com.este.conf.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.este.conf.models.Scientist;

public interface ScientistRepository extends JpaRepository<Scientist, Integer> {

}
