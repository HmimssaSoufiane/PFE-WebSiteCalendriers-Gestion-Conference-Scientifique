package com.este.conf.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.este.conf.models.Chair;
import com.este.conf.models.Conference;
import com.este.conf.repositories.ChairRepository;
import com.este.conf.repositories.ConferenceRepository;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/chair")
public class ChairController {

	@Autowired
	ChairRepository chairRepository;
	@Autowired
	ConferenceRepository conferenceRepository;

	@GetMapping("/chairs")
	public List<Chair> getchairs() {
		return chairRepository.findAll();
	}

	@GetMapping("/chairs/{id}")
	public Chair getchair(@PathVariable int id) {
		return chairRepository.findById(id).orElse(null);
	}

	@PostMapping("/chairs")
	public String addchair(@RequestBody Chair chair) {
		if (chair != null) {
			chairRepository.save(chair);
			return "Saved";
		}

		return "Errur";
	}

	@DeleteMapping("/chairs/{id}")
	public String deletechair(@PathVariable int id) {
		chairRepository.deleteById(id);
		return "Done";
	}

	// ----
	@PutMapping("/chairs/{id}/conference")
	public Chair updateConference(@PathVariable int id, @RequestBody Conference conference) {
		Chair chair = chairRepository.findById(id).orElse(null);

		if (chair != null) {

			/* Working */

//			Chair chair2= new Chair();
//			chair2.AddCreatedConference(new Conference(2, "soufiane", "test", "test", "test", "test", "test", "test"));
//			chair2.AddCreatedConference(new Conference(1, "soufiane", "test", "test", "test", "test", "test", "test"));

			conference.setCreator(chair);
			chair.getCreatedConferences().add(conference);
			// chairRepository.save(chair);
			conferenceRepository.save(conference);

			/* Working */
//			conference.setCreator(chair);
//			conferenceRepository.save(conference);

			/*
			 * NOT Working : CreatedConferences not found Chair (creator) API Call : But the
			 * weird part that conference has created and the "creator" field is null in
			 * conferences API call
			 */
//			chair.getCreatedConferences().add(conference);	
//			chairRepository.save(chair);

			return chair;
		}

		return null;
	}

}
