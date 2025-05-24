import { Tooltip } from 'react-tooltip';

const LifeStyle = ({ lifestylePreferences }) => {
    return (
        <>
            <div className="flex flex-wrap gap-2 mt-1">
                {lifestylePreferences.pets && (
                    <div>
                        <span data-tooltip-id="listing-tooltip" data-tooltip-content="Pet Friendly" className="pet badge bg-green-100 text-green-800 px-2 py-1 rounded text-xs">
                            🐾 Pets

                        </span>
                    </div>

                )}
                {lifestylePreferences.smoking ? (
                    <div>
                        <span data-tooltip-id="listing-tooltip" data-tooltip-content="Smoking Allowed" className="smoking badge bg-red-100 text-red-800 px-2 py-1 rounded text-xs">
                            🚬 Smoking
                        </span>
                    </div>
                ) : (
                    <div>
                        <span data-tooltip-id="listing-tooltip" data-tooltip-content="Non-Smoking Environment" className="no-smoking badge bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                            🚭 No Smoking
                        </span>
                    </div>
                )}
                {lifestylePreferences.nightOwl && (
                    <div>
                        <span data-tooltip-id="listing-tooltip" data-tooltip-content="Night Owl Friendly" className="night-owl badge bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs">
                            🕶️ Night Owl
                        </span>
                    </div>
                )} 
                <Tooltip id='listing-tooltip' place="top" delayShow={300} >hello</Tooltip>
            </div>
        </>
    );
};

export default LifeStyle;