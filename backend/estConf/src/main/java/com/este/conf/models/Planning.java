package com.este.conf.models;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import org.hibernate.annotations.Cascade;
import org.hibernate.annotations.CascadeType;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
@Entity
public class Planning  implements Comparable<Planning>{


	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int idPlanning;
	private String title ;
	private Date date;

	
	@ManyToOne
	@Cascade(value = { CascadeType.SAVE_UPDATE })
	@JoinColumn(name="idConference")
	@JsonIgnoreProperties("plannings")
	private Conference conference;
	
	
	public Planning() {}





	public Planning(int idPlanning, String title, Date date, Conference conference) {
		super();
		this.idPlanning = idPlanning;
		this.title = title;
		this.date = date;
		this.conference = conference;
	}





	public int getIdPlanning() {
		return idPlanning;
	}





	public void setIdPlanning(int idPlanning) {
		this.idPlanning = idPlanning;
	}





	public String getTitle() {
		return title;
	}





	public void setTitle(String title) {
		this.title = title;
	}





	public Date getDate() {
		return date;
	}





	public void setDate(Date date) {
		this.date = date;
	}





	public Conference getConference() {
		return conference;
	}





	public void setConference(Conference conference) {
		this.conference = conference;
	}





	@Override
	public int compareTo(Planning o) {
		if (this.idPlanning != o.getIdPlanning())
			return 1;
		return 0;
	}
	


	
	
}
