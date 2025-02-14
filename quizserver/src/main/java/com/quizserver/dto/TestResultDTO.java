package com.quizserver.dto;

import lombok.Data;

@Data
public class TestResultDTO {
    private Long id;
    private int totalQuestions;
    private int correctAnswers;
    private double percentage;
    private String testName;
    private String userName;

}
