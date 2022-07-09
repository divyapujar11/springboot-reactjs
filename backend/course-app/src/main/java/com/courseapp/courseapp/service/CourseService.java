package com.courseapp.courseapp.service;

import java.util.List;

import com.courseapp.courseapp.model.Course;

public interface CourseService {
	public List<Course> getCourses();

	public Course getCourse(long courseId);

	public Course addCourse(Course course);

	public Course updateCourse(Course course);
}
