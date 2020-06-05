package com.este.conf.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.este.conf.models.Sponsor;

public interface SponsorRepository extends JpaRepository<Sponsor, Integer>{

}
