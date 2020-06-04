package com.este.conf.model;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;


@Entity
public class Sponsor {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int IdSponsor;
	private String name;
	private Byte[] logo;
	
    @ManyToMany(mappedBy = "sponsors")
    private Set<Conference> conferences = new HashSet<>();
}
