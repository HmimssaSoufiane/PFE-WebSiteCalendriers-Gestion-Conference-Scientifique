package com.este.conf.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.este.conf.models.Planning;

public interface PlanningRepository extends JpaRepository<Planning, Integer>{

}
