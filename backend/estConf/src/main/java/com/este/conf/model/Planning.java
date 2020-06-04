package com.este.conf.model;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import org.hibernate.annotations.Cascade;
import org.hibernate.annotations.CascadeType;
@Entity
public class Planning {


	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int idPlanning;
	private String event ;
	private Date dateStar;
	private Date dateEnd;
	
	@ManyToOne
	@Cascade(value = { CascadeType.SAVE_UPDATE })
	@JoinColumn(name="idConference")
	private Conference conference;
	
	
	public Planning() {}
	

	public Planning(int idPlanning, String event, Date dateStar, Date dateEnd) {
		super();
		this.idPlanning = idPlanning;
		this.event = event;
		this.dateStar = dateStar;
		this.dateEnd = dateEnd;
	}


	public Planning(int idPlanning, String event, Date dateStar, Date dateEnd, Conference conference) {
		super();
		this.idPlanning = idPlanning;
		this.event = event;
		this.dateStar = dateStar;
		this.dateEnd = dateEnd;
		this.conference = conference;
	}


	public int getIdPlanning() {
		return idPlanning;
	}


	public void setIdPlanning(int idPlanning) {
		this.idPlanning = idPlanning;
	}


	public String getEvent() {
		return event;
	}


	public void setEvent(String event) {
		this.event = event;
	}


	public Date getDateStar() {
		return dateStar;
	}


	public void setDateStar(Date dateStar) {
		this.dateStar = dateStar;
	}


	public Date getDateEnd() {
		return dateEnd;
	}


	public void setDateEnd(Date dateEnd) {
		this.dateEnd = dateEnd;
	}


	public Conference getConference() {
		return conference;
	}


	public void setConference(Conference conference) {
		this.conference = conference;
	}

	
	
}
