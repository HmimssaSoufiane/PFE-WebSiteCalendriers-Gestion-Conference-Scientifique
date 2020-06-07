package com.este.conf.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.este.conf.models.Conference;

@Repository
public interface ConferenceRepository extends JpaRepository<Conference, Integer> {

}
