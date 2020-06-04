package com.este.conf.model;

import javax.persistence.Basic;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.MappedSuperclass;

@MappedSuperclass
public class Person {

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
	
	public Person() {
		// TODO Auto-generated constructor stub
	}
	public Person(int idPerson, String title, String firstName, String middleName, String lastName, Byte[] photo,
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
}
