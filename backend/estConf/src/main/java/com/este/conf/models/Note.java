package com.este.conf.models;

import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import org.hibernate.annotations.Cascade;
import org.hibernate.annotations.CascadeType;

@Entity
public class Note {
	

	@EmbeddedId
	protected NotePK notePK;
	private float note;

	@ManyToOne
	@JoinColumn(name = "idPerson", insertable = false, updatable = false)
	@Cascade(value = { CascadeType.ALL })
	private Scientist scientist;

	@ManyToOne
	@JoinColumn(name = "idArticle", insertable = false, updatable = false)
	@Cascade(value = { CascadeType.ALL })
	private Article article;

	public Note() {
		// TODO Auto-generated constructor stub
	}
	
	
	public Note(NotePK notePK, float note, Scientist scientist, Article article) {
		super();
		this.notePK = notePK;
		this.note = note;
		this.scientist = scientist;
		this.article = article;
	}
	
	public Note(float note, Scientist scientist, Article article) {
		super();
		this.note = note;
		this.scientist = scientist;
		this.article = article;
	}
	

	public NotePK getNotePK() {
		return notePK;
	}

	public void setNotePK(NotePK notePK) {
		this.notePK = notePK;
	}

	public float getNote() {
		return note;
	}

	public void setNote(float note) {
		this.note = note;
	}

	public Scientist getScientist() {
		return scientist;
	}

	public void setScientist(Scientist scientist) {
		this.scientist = scientist;
	}

	public Article getArticle() {
		return article;
	}

	public void setArticle(Article article) {
		this.article = article;
	}
	
	
}
