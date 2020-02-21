/**
 * model.js
 *
 * The JavaScript class that will wrap the entirity of our Agile Development
 * Board
 *
 * @author Ellery De Jesus
 * @author Chris Wolf
 * @version 2.0.0 (October 7, 2019)
 * Model.ts holds and handles Boards
 * @version 3.0.0 (February 19, 2020)
 * Moved all of the fields and methods to Project.ts due to the functionality 
 * of Model changing from holding and handling Boards to holding and handling
 * Projects.
 */

import { Project } from './Project';
import { ProjectFactory } from './factories/ProjectFactory'
import { Controller } from '../controller/Controller';
import { BoardOptions } from './enums/BoardOptions';
import { ListOptions } from './enums/ListOptions';

export class Model {
  private project: Project;
  private projectFactory: ProjectFactory;
  private controller: Controller;
  private projectName: string;

  constructor(controller, projectName) {
    this.projectName = projectName;
    this.project = new Project(this.projectName);
    this.projectFactory = new ProjectFactory();
    this.controller = controller;
  }

  /** 
   * Returns the title of a project
   * 
   * @param {number} projectID the ID of the project 
   * @returns the title of the project
   */
  // getProjectTitle(projectID: number): string {
  //   return this.projects[projectID].getTitle();
  // }


  /**
   * Generates a project.
   * @param {string} title the title of the project being generated 
   */
  // generateProject(title: string) {
  //   this.projects.push(new Project(title));
  // }

  /**
   * Removes a project
   * @param {number} projectID the ID of the project being removed 
   */
  // removeProject(projectID: number) {
  //   this.projects.splice(projectID, 1);
  // }

  /**
   * Adds a project that has already been created.
   * @param {Project} project 
   */
  // addProject(project: Project) {
  //   this.projects.push(project);
  // }

  /**
   * Returns the title of a board
   * @param projectID 
   * @param boardID
   */

  getBoardTitle(boardID: number): string {
    return this.project.getBoardTitle(boardID);
  }

  /**
   * Generates a board from a template based on user preference
   *
   * @param projectID
   * @param option 
   */
  generateBoardTemplate(option: BoardOptions) {
    this.project.generateBoardTemplate(option);
  } // end generateBoardTemplate

  /**
   * Removes a board from the list of boards.
   *
   * @param {number} projectID the id of the Project to be removed
   * @param {number} boardID the id of the board to be removed
   */
  removeBoard(boardID: number) {
    this.project.removeBoard(boardID);
  } // end removeBoard

  /**
   * Generates a list with the title and color provided in the board specified by the Controller.
   *
   * @param {number} projectID the id of the board's Project
   * @param {number} boardID the id of the board we are trying to add a list into.
   * @param {string} label the name of the list being generated
   * @param {colors} color the color of the list being generated
   */
  generateList(boardID: number, label: string): void {
    this.project.generateList(boardID, label);
  } // end generateList

  /**
   * Generates a list based on the template given, to the specified board
   *
   * @param {number} projectID the id of the board's project
   * @param {number} boardID the id of the baord we are trying to add a list into
   * @param {option} option the type of list we are trying to create
   */
  generateListTemplate(boardID: number, option: ListOptions): void {
    this.project.generateListTemplate(boardID, option);
  } // end generateListTemplate

  /**
   * Removes a list from a specified board.
   * @param {number} projectID the ID of the board's project
   * @param {number} boardID the ID of the board from whom we want to remove a list from
   * @param {number} listID the ID of the list we are removing
   */
  removeList(boardID: number, listID: number): void {
    this.project.removeList(boardID, listID);
  } // end removeList

  /**
   * Generates a card within a board's list
   *
   * @param {number} projectID
   * @param {number} boardID
   * @param {number} listID
   * @param {string} label
   * @param {string} text
   *
   */
  generateTaskCard(boardID: number, listID: number, label: string, text: string): void {
    this.project.generateTaskCard(boardID, listID, label, text);
  } // end generateTaskCard

  /**
   * Remove a task card from the specified list from a specified board.
   * @param {number} projectID the ID of the board's project
   * @param {number} boardID the ID of the list's board
   * @param {integer} listID the ID of the list we're removing a card from.
   * @param {integer} taskID the ID of the card we're removing.
   */
  removeTaskCard(boardID: number, listID: number, taskID: number): void {
    this.project.removeTaskCard(boardID, listID, taskID);
  } // end removeTaskCard

  /**
   * Sets the controller of this app.
   *
   * @param {controller} Controller the controller that will send commands to this app.
   */
  setController(controller: Controller): void {
    this.controller = controller;
  } // end setController

  /**
   * Loads a board given to it by the controller.
   * @param {model} model board to be loaded 
   */
  loadProject(project: Project) {
    let newProject: Project = new Project("");
    newProject.loadProject(project);
    this.project = newProject; // end for
  } // end loadBoards

  getProjects(): Project {
    return this.project;
  } // end getBoards
} // end App

