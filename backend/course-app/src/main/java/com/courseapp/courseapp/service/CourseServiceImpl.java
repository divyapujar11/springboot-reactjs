package com.courseapp.courseapp.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.courseapp.courseapp.model.Course;
import com.courseapp.courseapp.repository.CourseRepo;

@Service
public class CourseServiceImpl implements CourseService {
	
//	List<Course> list;
	
	@Autowired
	public CourseRepo courseRepo;
	
	public CourseServiceImpl() {
//		list = new ArrayList<>();
//		list.add(new Course(145,"Java Course","this course contains basic java concepts"));
//		list.add(new Course(199,"Spring boot","this course contains concepts of spring boot for brginners"));
	}

	@Override
	public List<Course> getCourses() {
		// TODO Auto-generated method stub
		return courseRepo.findAll();
	}

	@Override
	public Course getCourse(long courseId) {
//		Course c = null;
//		for(Course course:list) {
//			if(course.getId() == courseId) {
//				c = course;
//				break;
//			}
//		}
		return courseRepo.findById(courseId).get();
	}

	@Override
	public Course addCourse(Course course) {
//		list.add(course);
		courseRepo.save(course);
		return course;
	}

	@Override
	public Course updateCourse(Course course) {
//		list.forEach(e ->{
//			if(e.getId() == course.getId()) {
//				e.setTitle(course.getTitle());
//				e.setDescription(course.getDescription());
//			}
//		});
		
		courseRepo.save(course);
		return course;
	}

	@Override
	public void deleteCourse(long courseId) {
		// TODO Auto-generated method stub
		courseRepo.deleteById(courseId);
		
	}

}
