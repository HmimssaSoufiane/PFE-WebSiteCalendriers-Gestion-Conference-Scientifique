package com.este.conf.model;


import java.util.SortedMap;
import java.util.TreeMap;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.MapKey;
import javax.persistence.OneToMany;

import org.hibernate.annotations.Cascade;
import org.hibernate.annotations.CascadeType;
import org.hibernate.annotations.SortNatural;
 
 

@Entity
public class Article {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int idArticle;
	
	private String abstract_ ;
	private Byte[] file; 
	private float note;
	private String status;
	private String[] keyword;
	
	@ManyToOne
	@Cascade(value = { CascadeType.SAVE_UPDATE })
	@JoinColumn(name="idPerson")
	private Author author;
	
	@ManyToOne
	@Cascade(value = { CascadeType.SAVE_UPDATE })
	@JoinColumn(name="idConference")
	private Conference conference;

	@OneToMany(mappedBy = "Article ")
	@Cascade(value = { CascadeType.ALL })
	@SortNatural
	@MapKey(name = "Scientist")
	private SortedMap<Scientist, Note> notesByScientist = new TreeMap<>();
	
	
}
