package com.este.conf.models;

import java.util.Set;
import java.util.TreeSet;

import javax.persistence.Basic;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.MapKey;
import javax.persistence.OneToMany;

import org.hibernate.annotations.Cascade;
import org.hibernate.annotations.CascadeType;
import org.hibernate.annotations.SortNatural;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
public class Chair implements Comparable<Chair> {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int idPerson;
	private String title;
	private String firstName;
	private String middleName;
	private String lastName;
	@Lob
	@Basic(fetch = FetchType.LAZY)
	private Byte[] Photo;
	// Personal Information
	private String organizationName;
	private String country;
	private String region;
	private String phone;
	// Login information
	private String email;
	private String password;

	// External Profile Information
	@OneToMany(mappedBy = "creator")
	@Cascade(value = { CascadeType.ALL })
	@SortNatural
	@JsonIgnoreProperties("creator")
	private Set<Conference> createdConferences = new TreeSet<Conference>();

	@OneToMany(mappedBy = "chair")
	@Cascade(value = { CascadeType.ALL })
	@SortNatural
	@MapKey(name = "conference")
	private Set<ChairRole> chairRoles = new TreeSet<ChairRole>();

	public Chair() {
		// TODO Auto-generated constructor stub
	}

	public Chair(int idPerson, String title, String firstName, String middleName, String lastName, Byte[] photo,
			String organizationName, String country, String region, String phone, String email, String password) {

		super();
		this.idPerson = idPerson;
		this.title = title;
		this.firstName = firstName;
		this.middleName = middleName;
		this.lastName = lastName;
		Photo = photo;
		this.organizationName = organizationName;
		this.country = country;
		this.region = region;
		this.phone = phone;
		this.email = email;
		this.password = password;

	}



	public Set<Conference> getCreatedConferences() {
		return createdConferences;
	}

	public void setCreatedConferences(Set<Conference> createdConferences) {
		this.createdConferences = createdConferences;
	}

	public void AddCreatedConference(Conference conference) {

		this.createdConferences.add(conference);
	}

	public Set<ChairRole> getChairRoles() {
		return chairRoles;
	}

	public void setChairRoles(Set<ChairRole> chairRoles) {
		this.chairRoles = chairRoles;
	}

	

	public int getIdPerson() {
		return idPerson;
	}

	public void setIdPerson(int idPerson) {
		this.idPerson = idPerson;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getMiddleName() {
		return middleName;
	}

	public void setMiddleName(String middleName) {
		this.middleName = middleName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public Byte[] getPhoto() {
		return Photo;
	}

	public void setPhoto(Byte[] photo) {
		Photo = photo;
	}

	public String getOrganizationName() {
		return organizationName;
	}

	public void setOrganizationName(String organizationName) {
		this.organizationName = organizationName;
	}

	public String getCountry() {
		return country;
	}

	public void setCountry(String country) {
		this.country = country;
	}

	public String getRegion() {
		return region;
	}

	public void setRegion(String region) {
		this.region = region;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}


	@Override
	public int compareTo(Chair o) {
		if (idPerson != o.getIdPerson())
			return 1;
		return 0;
	}

	

}
