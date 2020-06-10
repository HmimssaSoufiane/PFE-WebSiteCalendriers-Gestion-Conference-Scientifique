package com.este.conf.models;



import java.util.Set;
import java.util.SortedSet;
import java.util.TreeSet;

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
	@JoinColumn(name="idAuthor")
	private Author author;
 	
	@ManyToOne
	@Cascade(value = { CascadeType.SAVE_UPDATE })
	@JoinColumn(name="idConference")
	private Conference conference;

	@OneToMany(mappedBy = "article")
	@Cascade(value = { CascadeType.ALL })
	@SortNatural
	@MapKey(name = "idArticle")
	private SortedSet<Note> notesByScientist = new TreeSet<>();
	
	
	public Article () {}
	

	public Article(int idArticle, String abstract_, Byte[] file, float noteAverage, String status, String[] keyword,
			Author author, Conference conference) {
		super();
		this.idArticle = idArticle;
		this.abstract_ = abstract_;
		this.file = file;
		this.noteAverage = noteAverage;
		this.status = status;
		this.keyword = keyword;
		this.author = author;
		this.conference = conference;
	}


	public int getIdArticle() {
		return idArticle;
	}

	public void setIdArticle(int idArticle) {
		this.idArticle = idArticle;
	}

	public String getAbstract_() {
		return abstract_;
	}

	public void setAbstract_(String abstract_) {
		this.abstract_ = abstract_;
	}

	public Byte[] getFile() {
		return file;
	}

	public void setFile(Byte[] file) {
		this.file = file;
	}

	public float getNoteAverage() {
		return noteAverage;
	}

	public void setNoteAverage(float noteAverage) {
		this.noteAverage = noteAverage;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public String[] getKeyword() {
		return keyword;
	}

	public void setKeyword(String[] keyword) {
		this.keyword = keyword;
	}

	public Author getAuthor() {
		return author;
	}

	public void setAuthor(Author author) {
		this.author = author;
	}

	public Conference getConference() {
		return conference;
	}

	public void setConference(Conference conference) {
		this.conference = conference;
	}

	public Set<Note> getNotesByScientist() {
		return notesByScientist;
	}

	public void setNotesByScientist(SortedSet<Note> notesByScientist) {
		this.notesByScientist = notesByScientist;
	}
	
	
}
