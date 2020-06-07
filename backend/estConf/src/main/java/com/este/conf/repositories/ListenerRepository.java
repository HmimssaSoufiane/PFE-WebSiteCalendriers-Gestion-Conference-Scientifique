package com.este.conf.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.este.conf.models.Listener;


@Repository
public interface ListenerRepository  extends JpaRepository<Listener, Integer>{

}
