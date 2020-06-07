package com.este.conf.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.este.conf.models.Sponsor;


@Repository
public interface SponsorRepository extends JpaRepository<Sponsor, Integer>{

}
