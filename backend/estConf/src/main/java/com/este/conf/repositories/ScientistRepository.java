package com.este.conf.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.este.conf.models.Scientist;


@Repository
public interface ScientistRepository extends JpaRepository<Scientist, Integer> {

}
