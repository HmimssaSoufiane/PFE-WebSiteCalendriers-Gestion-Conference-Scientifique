package com.este.conf.models;

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

    public Sponsor() {
		// TODO Auto-generated constructor stub
	}
    
	public Sponsor(int idSponsor, String name, Byte[] logo) {
		super();
		IdSponsor = idSponsor;
		this.name = name;
		this.logo = logo;
	}

	public Sponsor(int idSponsor, String name, Byte[] logo, Set<Conference> conferences) {
		super();
		IdSponsor = idSponsor;
		this.name = name;
		this.logo = logo;
		this.conferences = conferences;
	}
	

	public int getIdSponsor() {
		return IdSponsor;
	}

	public void setIdSponsor(int idSponsor) {
		IdSponsor = idSponsor;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Byte[] getLogo() {
		return logo;
	}

	public void setLogo(Byte[] logo) {
		this.logo = logo;
	}

	public Set<Conference> getConferences() {
		return conferences;
	}

	public void setConferences(Set<Conference> conferences) {
		this.conferences = conferences;
	}
	
    
}
