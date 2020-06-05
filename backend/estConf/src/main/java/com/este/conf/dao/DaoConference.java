package com.este.conf.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import com.este.conf.model.Conference;

public interface DaoConference extends JpaRepository<Conference, Integer> {

}
