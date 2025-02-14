package com.quizserver.dto;

import com.quizserver.entities.Question;
import com.quizserver.repository.QuestionRepository;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

import java.util.List;

@Data
public class SubmitTestDTO {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long TestId;
    private Long UserId;
    private List<QuestionResponse> responses;


}
