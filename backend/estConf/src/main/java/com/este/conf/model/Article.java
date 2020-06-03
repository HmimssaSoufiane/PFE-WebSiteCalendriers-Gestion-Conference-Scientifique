package com.este.conf.model;



import java.util.HashSet;
import java.util.Set;
import javax.persistence.Basic;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.Lob;
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
	@Lob
	@Basic(fetch = FetchType.LAZY)
	private Byte[] file; 
	private float noteAverage ;
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

	@OneToMany(mappedBy = "article")
	@Cascade(value = { CascadeType.ALL })
	@SortNatural
	@MapKey(name = "idArticle")
	private Set<Note> notesByScientist = new HashSet<>();
	
	public Article () {}
	
	
}
