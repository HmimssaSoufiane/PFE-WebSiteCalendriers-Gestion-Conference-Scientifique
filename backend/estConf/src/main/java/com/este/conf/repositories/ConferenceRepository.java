package com.este.conf.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.este.conf.models.Conference;

public interface ConferenceRepository extends JpaRepository<Conference, Integer> {

}
