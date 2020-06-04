package com.este.conf.model;

import java.util.HashSet;
import java.util.Set;
import java.util.SortedSet;
import java.util.TreeSet;

import javax.persistence.Entity;
import javax.persistence.MapKey;
import javax.persistence.OneToMany;

import org.hibernate.annotations.Cascade;
import org.hibernate.annotations.CascadeType;
import org.hibernate.annotations.SortNatural;

@Entity
public class Chair extends Person {


	@OneToMany(mappedBy = "creator")
	@Cascade(value = { CascadeType.ALL })
	@SortNatural
	private SortedSet<Conference> createdConferences = new TreeSet<>();

	//---------M2M
	
	@OneToMany(mappedBy = "chair")
	@Cascade(value = { CascadeType.ALL })
	@SortNatural
	@MapKey(name = "conference")
	private Set<ChairRole> chairRoles = new HashSet<>();
	
	
	public Chair() {
		// TODO Auto-generated constructor stub
	}
	public Chair(int idPerson, String title, String firstName, String middleName, String lastName, Byte[] photo,
			String organizationName, String country, String region, String phone, String email, String password) {
		super(idPerson, title, firstName, middleName, lastName, photo, organizationName, country, region, phone, email,
				password);
		// TODO Auto-generated constructor stub
	}
	public SortedSet<Conference> getCreatedConferences() {
		return createdConferences;
	}
	public void setCreatedConferences(SortedSet<Conference> createdConferences) {
		this.createdConferences = createdConferences;
	}
	public Set<ChairRole> getChairRoles() {
		return chairRoles;
	}
	public void setChairRoles(Set<ChairRole> chairRoles) {
		this.chairRoles = chairRoles;
	}
	

}
