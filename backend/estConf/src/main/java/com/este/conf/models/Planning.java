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
	private String event ;
	private Date eventDay;
	private Date timeStart;
	private Date timeEnd;
	
	@ManyToOne
	@Cascade(value = { CascadeType.SAVE_UPDATE })
	@JoinColumn(name="idConference")
	@JsonIgnoreProperties("plannings")
	private Conference conference;
	
	
	public Planning() {}


	public Planning(int idPlanning, String event, Date eventDay, Date timeStart, Date timeEnd) {
		super();
		this.idPlanning = idPlanning;
		this.event = event;
		this.eventDay = eventDay;
		this.timeStart = timeStart;
		this.timeEnd = timeEnd;
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


	public Date getEventDay() {
		return eventDay;
	}


	public void setEventDay(Date eventDay) {
		this.eventDay = eventDay;
	}


	public Date getTimeStart() {
		return timeStart;
	}


	public void setTimeStart(Date timeStart) {
		this.timeStart = timeStart;
	}


	public Date getTimeEnd() {
		return timeEnd;
	}


	public void setTimeEnd(Date timeEnd) {
		this.timeEnd = timeEnd;
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
