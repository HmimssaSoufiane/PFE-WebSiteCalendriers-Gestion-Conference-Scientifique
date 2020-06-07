package com.este.conf.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.este.conf.models.Planning;


@Repository
public interface PlanningRepository extends JpaRepository<Planning, Integer>{

}
