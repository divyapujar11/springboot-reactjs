package com.courseapp.courseapp.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.courseapp.courseapp.model.Course;

public interface CourseRepo extends MongoRepository<Course, Long> {

	
}
