package com.este.conf.repositories;



import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.este.conf.models.Chair;

@Repository
public interface ChairRepository extends JpaRepository<Chair, Integer>{

	public Chair findByEmail(String email);

}
