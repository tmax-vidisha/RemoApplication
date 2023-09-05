import React from "react";

const NewOrgChart = () => {
  return (
    <div>
      <div className="content">
        <h1>Responsive Organization Chart</h1>
        <figure className="org-chart cf">
          <ul className="administration">
            <li>
              <ul className="director">
                <li>
                  <a href="/" ref="">
                    <span>Director</span>
                  </a>
                  <ul className="subdirector">
                    <li>
                      <a href="/" ref="">
                        <span>Assistante Director</span>
                      </a>
                    </li>
                  </ul>
                  <ul className="departments cf">
                    <li>
                      <a href="/" ref="">
                        <span>Administration</span>
                      </a>
                    </li>

                    <li className="department dep-a">
                      <a href="/" ref="">
                        <span>Department A</span>
                      </a>
                      <ul className="sections">
                        <li className="section">
                          <a href="/" ref="">
                            <span>Section A1</span>
                          </a>
                        </li>
                        <li className="section">
                          <a href="/" ref="">
                            <span>Section A2</span>
                          </a>
                        </li>
                        <li className="section">
                          <a href="/" ref="">
                            <span>Section A3</span>
                          </a>
                        </li>
                        <li className="section">
                          <a href="/" ref="">
                            <span>Section A4</span>
                          </a>
                        </li>
                        <li className="section">
                          <a href="/" ref="">
                            <span>Section A5</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="department dep-b">
                      <a href="/" ref="">
                        <span>Department B</span>
                      </a>
                      <ul className="sections">
                        <li className="section">
                          <a href="/" ref="">
                            <span>Section B1</span>
                          </a>
                        </li>
                        <li className="section">
                          <a href="/" ref="">
                            <span>Section B2</span>
                          </a>
                        </li>
                        <li className="section">
                          <a href="/" ref="">
                            <span>Section B3</span>
                          </a>
                        </li>
                        <li className="section">
                          <a href="/" ref="">
                            <span>Section B4</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="department dep-c">
                      <a href="/" ref="">
                        <span>Department C</span>
                      </a>
                      <ul className="sections">
                        <li className="section">
                          <a href="/" ref="">
                            <span>Section C1</span>
                          </a>
                        </li>
                        <li className="section">
                          <a href="/" ref="">
                            <span>Section C2</span>
                          </a>
                        </li>
                        <li className="section">
                          <a href="/" ref="">
                            <span>Section C3</span>
                          </a>
                        </li>
                        <li className="section">
                          <a href="/" ref="">
                            <span>Section C4</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="department dep-d">
                      <a href="/" ref="">
                        <span>Department D</span>
                      </a>
                      <ul className="sections">
                        <li className="section">
                          <a href="/" ref="">
                            <span>Section D1</span>
                          </a>
                        </li>
                        <li className="section">
                          <a href="/" ref="">
                            <span>Section D2</span>
                          </a>
                        </li>
                        <li className="section">
                          <a href="/" ref="">
                            <span>Section D3</span>
                          </a>
                        </li>
                        <li className="section">
                          <a href="/" ref="">
                            <span>Section D4</span>
                          </a>
                        </li>
                        <li className="section">
                          <a href="/" ref="">
                            <span>Section D5</span>
                          </a>
                        </li>
                        <li className="section">
                          <a href="/" ref="">
                            <span>Section D6</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="department dep-e">
                      <a href="/" ref="">
                        <span>Department E</span>
                      </a>
                      <ul className="sections">
                        <li className="section">
                          <a href="/" ref="">
                            <span>Section E1</span>
                          </a>
                        </li>
                        <li className="section">
                          <a href="/" ref="">
                            <span>Section E2</span>
                          </a>
                        </li>
                        <li className="section">
                          <a href="/" ref="">
                            <span>Section E3</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </figure>
      </div>
    </div>
  );
};

export default NewOrgChart;
