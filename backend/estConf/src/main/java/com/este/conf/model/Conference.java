package com.este.conf.model;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;
import java.util.SortedSet;
import java.util.TreeSet;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import org.hibernate.annotations.Cascade;
import org.hibernate.annotations.CascadeType;
import org.hibernate.annotations.SortNatural;

@Entity
public class Conference {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int idConference;
	private String name;
	private String shortName;
	private String location;
	private String about;
	private String theme;
	private Date dateStar;
	private Date dateEnd;
 	
	@OneToMany(mappedBy = "conference")
	@Cascade(value = { CascadeType.ALL })
	@SortNatural
	private SortedSet<Article> articles = new TreeSet<>();
	
	@OneToMany(mappedBy = "conference")
	@Cascade(value = { CascadeType.ALL })
	@SortNatural
	private SortedSet<Planning> programs = new TreeSet<>();
		
	@OneToMany(mappedBy = "conference", orphanRemoval = true)
	@Cascade(value = { CascadeType.ALL })
	private Set<ChairRole> chairsRoles = new HashSet<>();
	
	@ManyToOne
	@Cascade(value = { CascadeType.SAVE_UPDATE })
	@JoinColumn(name="idPerson")
	private Chair creator;
	
	public Conference () {}

	
}
