package com.este.conf.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.este.conf.models.Chair;

public interface ChairRepository extends JpaRepository<Chair, Integer>{

}
