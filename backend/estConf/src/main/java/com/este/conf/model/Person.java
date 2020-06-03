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
}
